import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { CS3Unit1 } from '../../components/cs3/Unit1'
import { CS3Unit2 } from '../../components/cs3/Unit2'
import { CS3Unit3 } from '../../components/cs3/Unit3'
import { CS3Unit4 } from '../../components/cs3/Unit4'
import { CS3Unit5 } from '../../components/cs3/Unit5'
import { CS3Unit6 } from '../../components/cs3/Unit6'
import { CS3Unit7 } from '../../components/cs3/Unit7'
import { CS3Unit8 } from '../../components/cs3/Unit8'
import { CS3Unit9 } from '../../components/cs3/Unit9'
import { CS3Unit10 } from '../../components/cs3/Unit10'

const units: Record<string, { title: string; component: () => JSX.Element }> = {
  '1': { title: 'Unit 1: Files & Exceptions', component: CS3Unit1 },
  '2': { title: 'Unit 2: Sets & Maps', component: CS3Unit2 },
  '3': { title: 'Unit 3: Regex', component: CS3Unit3 },
  '4': { title: 'Unit 4: Iterators & Linked Lists', component: CS3Unit4 },
  '5': { title: 'Unit 5: Stacks & Expressions', component: CS3Unit5 },
  '6': { title: 'Unit 6: Writing Recursive Code', component: CS3Unit6 },
  '7': { title: 'Unit 7: Queues & Priority Queues', component: CS3Unit7 },
  '8': { title: 'Unit 8: Binary Trees', component: CS3Unit8 },
  '9': { title: 'Unit 9: Multithreading in Java', component: CS3Unit9 },
  '10': { title: 'Unit 10: Algorithms (Radix Sort, Heap Sort)', component: CS3Unit10 },
}

const unitTitles: Record<string, string> = {
  '1': 'Unit 1: Files & Exceptions',
  '2': 'Unit 2: Sets & Maps',
  '3': 'Unit 3: Regex',
  '4': 'Unit 4: Iterators & Linked Lists',
  '5': 'Unit 5: Stacks & Expressions',
  '6': 'Unit 6: Writing Recursive Code',
  '7': 'Unit 7: Queues & Priority Queues',
  '8': 'Unit 8: Binary Trees',
  '9': 'Unit 9: Multithreading in Java',
  '10': 'Unit 10: Algorithms (Radix Sort, Heap Sort)',
}

export const Route = createFileRoute('/cs3/$unitId')({
  head: ({ params }) => {
    const title = unitTitles[params.unitId]
    return {
      meta: [{ title: title ? `${title} — CS III — Mr. Yee's Classroom` : 'Unit Not Found' }],
    }
  },
  component: CS3UnitPage,
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

function CS3UnitPage() {
  const { unitId } = Route.useParams()
  const unit = units[unitId]
  const title = unitTitles[unitId]

  useHighlightCode(unitId)

  if (!unit) {
    return (
      <div className="unit-not-found">
        <h1>{title || 'Unit not available yet'}</h1>
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
        <span className="unit-nav-title">CS III &mdash; {unit.title}</span>
      </div>
      <UnitComponent />
    </div>
  )
}
