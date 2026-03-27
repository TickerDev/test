import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Unit1 } from '../../components/units/Unit1'
import { Unit2 } from '../../components/units/Unit2'
import { Unit3 } from '../../components/units/Unit3'
import { Unit4 } from '../../components/units/Unit4'
import { Unit5 } from '../../components/units/Unit5'
import { Unit6 } from '../../components/units/Unit6'
import { Unit7 } from '../../components/units/Unit7'
import { Unit8 } from '../../components/units/Unit8'
import { Unit11 } from '../../components/units/Unit11'
import { Unit12 } from '../../components/units/Unit12'

const units: Record<string, { title: string; component: () => JSX.Element }> = {
  '1': { title: 'Unit 1: Primitive Types & Intro to Java', component: Unit1 },
  '2': { title: 'Unit 2: Using Objects', component: Unit2 },
  '3': { title: 'Unit 3: Writing Classes', component: Unit3 },
  '4': { title: 'Unit 4: Expressions, Math & Strings', component: Unit4 },
  '5': { title: 'Unit 5: Boolean Expressions & if Statements', component: Unit5 },
  '6': { title: 'Unit 6: Iteration', component: Unit6 },
  '7': { title: 'Unit 7: Arrays, 2D Arrays & ArrayList', component: Unit7 },
  '8': { title: 'Unit 8 & 9 & 10: Inheritance, Polymorphism & Abstract Classes', component: Unit8 },
  '11': { title: 'Unit 11: Recursion', component: Unit11 },
  '12': { title: 'Unit 12: Searching & Sorting', component: Unit12 },
}

const unitTitles: Record<string, string> = {
  '1': 'Unit 1: Primitive Types & Intro to Java',
  '2': 'Unit 2: Using Objects',
  '3': 'Unit 3: Writing Classes',
  '4': 'Unit 4: Expressions, Math & Strings',
  '5': 'Unit 5: Boolean Expressions & if Statements',
  '6': 'Unit 6: Iteration',
  '7': 'Unit 7: Arrays, 2D Arrays & ArrayList',
  '8': 'Unit 8 & 9 & 10: Inheritance, Polymorphism & Abstract Classes',
  '11': 'Unit 11: Recursion',
  '12': 'Unit 12: Searching & Sorting',
}

export const Route = createFileRoute('/units/$unitId')({
  head: ({ params }) => {
    const title = unitTitles[params.unitId]
    return {
      meta: [{ title: title ? `${title} — Mr. Yee's Classroom` : 'Unit Not Found' }],
    }
  },
  component: UnitPage,
})

function useHighlightCode(dep: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    import('prismjs').then(async (Prism) => {
      await import('prismjs/components/prism-java' as string)
      await import('prismjs/components/prism-bash' as string)
      document.querySelectorAll('.code-block code').forEach((el) => {
        if (!el.className.includes('language-')) {
          el.classList.add('language-java')
        }
      })
      Prism.highlightAll()
    })
  }, [dep])
}

function UnitPage() {
  const { unitId } = Route.useParams()
  const unit = units[unitId]

  useHighlightCode(unitId)

  if (!unit) {
    return (
      <div className="unit-not-found">
        <h1>Unit not available yet</h1>
        <p>This unit is coming soon. Check back later!</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    )
  }

  const UnitComponent = unit.component
  return (
    <div className="unit-page">
      <div className="unit-nav-bar">
        <Link to="/" className="unit-back">&larr; All Units</Link>
        <span className="unit-nav-title">{unit.title}</span>
      </div>
      <UnitComponent />
    </div>
  )
}
