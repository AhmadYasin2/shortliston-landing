import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function UniversityNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="font-serif text-2xl">University Not Found</CardTitle>
          <CardDescription className="text-base">
            This university partnership page doesn't exist or may have been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 text-left">
            <h4 className="font-semibold font-serif mb-2">What you can do:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Check the link provided by your career office</li>
              <li>• Contact your university's career services</li>
              <li>• Join our general waitlist instead</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/signup">
              <Button className="w-full">Join General Waitlist</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
