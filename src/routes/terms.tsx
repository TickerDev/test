import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [{ title: "Terms of Service - Mr. Yee's Classroom" }],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="terms-page">
      <section className="page-header">
        <h1>Terms of Service</h1>
        <p>Last updated: March 27, 2026</p>
      </section>

      <div className="terms-wrapper">
        <div className="terms-card">
          <div className="terms-section">
            <h2>1. Disclaimer of Affiliation</h2>
            <p>
              This website is an <strong>independent, unofficial project</strong> and is{' '}
              <strong>not affiliated with, endorsed by, or sponsored by</strong> Plano
              Independent School District (PISD), Plano Senior High School (PSHS), or
              any individual teacher, including Mr. Yee. Any references to these names
              are used solely for descriptive and educational purposes.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Use of the Service</h2>
            <p>
              This website provides free educational games and tools for learning
              computer science concepts. By accessing or using the site, you agree to
              these terms. The service is provided "as is" without warranties of any
              kind.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. No Data Collection</h2>
            <p>
              We do not collect, store, or transmit any personal information. All game
              progress and preferences are stored locally in your browser and are never
              sent to any server.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The content, design, and code of this website are the work of its
              creators. The Tower of Hanoi is a classic mathematical puzzle in the
              public domain. No proprietary materials belonging to PISD, PSHS, or any
              affiliated entity are used on this site.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              The creators of this website shall not be held liable for any damages
              arising from the use or inability to use this service. This site is
              provided for educational and entertainment purposes only.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Changes to These Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of
              the site after changes constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
