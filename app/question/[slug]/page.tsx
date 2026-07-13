import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getAllAssignments, getAssignmentBySlug } from "../../../lib/getAssignments";
import { Sidebar } from "../../../components/Sidebar";
import { CodeBlock } from "../../../components/CodeBlock";
import { OutputViewer } from "../../../components/OutputViewer";
import { ComplexityBadge } from "../../../components/ComplexityBadge";
import { FadeIn } from "../../../components/ui/FadeIn";

export function generateStaticParams() {
  const assignments = getAllAssignments();
  return assignments.map((a) => ({
    slug: a.slug,
  }));
}

interface QuestionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params;
  const assignment = getAssignmentBySlug(slug);

  if (!assignment) {
    notFound();
  }

  // Read code file via fs
  const codeFilePath = path.join(process.cwd(), "public", assignment.code_file);
  let codeContent = "";
  try {
    codeContent = fs.readFileSync(codeFilePath, "utf8");
  } catch (e) {
    codeContent = "// Error loading code file";
  }

  const assignments = getAllAssignments();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar currentSlug={slug} assignments={assignments} />

      <main className="flex-1 flex flex-col xl:flex-row p-4 lg:p-8 gap-8 xl:gap-12 overflow-hidden">
        {/* Left pane: Problem Statement */}
        <div className="xl:w-1/3 flex flex-col gap-6">
          <FadeIn direction="left">
            <h1 className="text-[--text-display] font-display font-semibold tracking-tight text-balance leading-tight">
              {assignment.title}
            </h1>
          </FadeIn>
          
          <FadeIn delayMs={60} direction="left">
            <ComplexityBadge time={assignment.complexities.time} space={assignment.complexities.space} />
          </FadeIn>

          <FadeIn delayMs={120} direction="up">
            <div className="text-[--text-secondary] leading-relaxed">
              <p>{assignment.problem_statement}</p>
            </div>
          </FadeIn>

          <FadeIn delayMs={180} direction="up">
            <div className="mt-4">
              <h3 className="text-[--text-xs] uppercase tracking-wider text-[--text-tertiary] font-semibold mb-3">
                Execution Output
              </h3>
              <OutputViewer imagePath={assignment.image_path} altText={`${assignment.title} output`} />
            </div>
          </FadeIn>
        </div>

        {/* Right pane: Code Block */}
        <div className="xl:w-2/3 flex flex-col min-w-0 h-full">
          <FadeIn delayMs={240} className="h-full">
             <CodeBlock code={codeContent} language="javascript" />
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
