import Link from "next/link";
import { getAllAssignments } from "../lib/getAssignments";
import { ViewQuestionsButton } from "../components/ViewQuestionsButton";
import { HeroTitle } from "../components/HeroTitle";
import { HeroImage } from "../components/HeroImage";
import { Card } from "../components/ui/Card";
import { ComplexityBadge } from "../components/ComplexityBadge";
import { FadeIn } from "../components/ui/FadeIn";

export default function Home() {
  const assignments = getAllAssignments();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
          <FadeIn delayMs={80} direction="left">
            <HeroTitle />
          </FadeIn>

          <FadeIn delayMs={160}>
            <h2 className="text-2xl lg:text-3xl text-[--text-secondary] font-display font-medium mt-2">
              Bachelor of Computer Application
            </h2>
          </FadeIn>

          <FadeIn delayMs={240}>
            <div className="text-[--text-tertiary] text-base lg:text-lg flex flex-col gap-1">
              <p>Techno Main Salt Lake</p>
              <p>CC292 — Data Structures Lab</p>
            </div>
          </FadeIn>

          <FadeIn delayMs={320}>
            <p className="text-[--accent-primary] text-xl font-medium mt-2">
              10 DSA problems, solved and explained.
            </p>
          </FadeIn>

          <FadeIn delayMs={400} direction="up">
            <div className="flex flex-row items-center gap-4">
              <ViewQuestionsButton />
              <a
                href="https://drive.google.com/drive/folders/1_y68A7I00Sncjyy2Im3HK-u2q6Jlz5nd?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[--bg-raised] border border-[--accent-line] text-[--text-primary] hover:text-[--accent-primary] hover:border-[--accent-primary] transition-colors font-medium w-fit text-lg cursor-pointer"
              >
                Google Drive
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Photo Content */}
        <div className="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-lg mx-auto relative">
          <FadeIn delayMs={0} direction="none">
            <HeroImage />
          </FadeIn>
        </div>
      </section>

      {/* About Block */}
      <section className="mb-20 lg:mb-32">
        <FadeIn delayMs={100}>
          <div className="p-8 lg:p-10 border border-[--accent-line] bg-[--bg-raised]">
            <h3 className="text-xl lg:text-2xl font-display font-medium mb-4 text-[--text-primary]">
              About this assignment
            </h3>
            <p className="text-[--text-secondary] text-lg leading-relaxed max-w-4xl">
              This portfolio showcases the practical implementation of fundamental data structures and algorithms in C/C++.
              Each solution is paired with theoretical complexity analysis, source code, and verified sample execution outputs
              as part of the core curriculum coursework.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Questions List Section */}
      <section id="questions" className="scroll-mt-24">
        <FadeIn>
          <h3 className="text-3xl font-display font-semibold mb-8 text-[--text-primary]">
            The Problems
          </h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((assignment, index) => (
            <FadeIn key={assignment.id} delayMs={index * 50}>
              <Link href={`/question/${assignment.slug}`} className="block group h-full">
                <Card accented={false} className="h-full flex flex-col p-6 hover:border-[--accent-primary] transition-colors border border-[--accent-line] bg-[--bg-raised]">
                  <h4 className="text-xl font-display font-medium mb-3 group-hover:text-[--accent-primary] transition-colors text-[--text-primary]">
                    {assignment.title}
                  </h4>
                  <p className="text-[--text-secondary] line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {assignment.problem_statement}
                  </p>
                  <div className="mt-auto pt-4 border-t border-[--accent-line]">
                    <ComplexityBadge
                      time={assignment.complexities.time}
                      space={assignment.complexities.space}
                    />
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
