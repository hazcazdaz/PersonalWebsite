import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  return (
    <section id="resume" className="container py-16 md:py-24">
      <header className="mb-6 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resume</h2>
        <p className="mt-2 text-muted-foreground">View or download my latest resume. For opportunities, feel free to reach out via the contact section.</p>
      </header>

      <div className="flex items-center gap-3 mb-6">
        <Button asChild size="lg">
          <a href="/resume.pdf" target="_blank" rel="noopener" aria-label="Open resume PDF in a new tab">
            View/Download PDF
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#contact" aria-label="Jump to contact section">Contact me</a>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Inline Preview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Embedded PDF preview. If the file is not present, users will see the fallback below. */}
          <object
            data="/resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-[70vh] rounded-md border"
          >
            <div className="p-6 rounded-md border bg-muted/30 text-muted-foreground">
              <p className="mb-4">Resume preview unavailable. You can still download it using the button above.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <a href="/resume.pdf" target="_blank" rel="noopener">Open PDF</a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="#contact">Contact me</a>
                </Button>
              </div>
            </div>
          </object>
        </CardContent>
      </Card>
    </section>
  );
};

export default Resume;