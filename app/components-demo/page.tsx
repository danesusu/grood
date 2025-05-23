import { GroodButton } from "@/components/ui/grood-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ComponentsDemo() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-background py-16 font-futura">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">UI Components Demo</h1>

            <Tabs defaultValue="buttons" className="mb-12">
              <TabsList className="mb-6">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="inputs">Inputs</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
              </TabsList>

              <TabsContent value="buttons" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <GroodButton variant="primary">Primary Button</GroodButton>
                    <GroodButton variant="secondary">
                      Secondary Button
                    </GroodButton>
                    <GroodButton variant="outline">Outline Button</GroodButton>
                    <GroodButton variant="primary" size="sm">
                      Small Button
                    </GroodButton>
                    <GroodButton variant="primary" size="lg">
                      Large Button
                    </GroodButton>
                    <GroodButton variant="primary" disabled>
                      Disabled Button
                    </GroodButton>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inputs" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Input Fields</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="default">Default Input</Label>
                      <Input id="default" placeholder="Enter text here" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="disabled">Disabled Input</Label>
                      <Input
                        id="disabled"
                        placeholder="Disabled input"
                        disabled
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="select">Select Input</Label>
                      <Select>
                        <SelectTrigger id="select">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cards" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        This is a basic card component with a header and
                        content.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-sky-50">
                    <CardHeader>
                      <CardTitle>Colored Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a custom background color.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-400 border-2">
                    <CardHeader>
                      <CardTitle>Custom Border</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a custom border color.</p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Shadow Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a larger shadow effect.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
