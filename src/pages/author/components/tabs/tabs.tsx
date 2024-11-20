import { PropsWithChildren } from "react";
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import MyCard from "../../../../pages/home/components/card-list/card/card";
const Tabs: React.FC<PropsWithChildren> = () => {
  return (
    <div className="container sm:px-44 mx-auto flex gap-5 font-sans mb-9 mt-9">
      <TabsComponent defaultValue="articles" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="articles" className="w-1/2">
            Articles
          </TabsTrigger>
          <TabsTrigger value="about" className="w-1/2">
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="w-full">
          <MyCard width="w-full" />
        </TabsContent>
        <TabsContent value="about">
          <Card className="rounded-xl border-solid border-b mt-8 border-zinc-200 bg-card text-card-foreground shadow h-56 w-full mb-5">
            <CardHeader>
              <CardTitle className="dark:text-white font-sans text-base">
                About John Doe
              </CardTitle>
              <CardDescription className="text-base font-sans">
                John Doe is a seasoned software engineer with over a decade of
                experience in web development. She specializes in JavaScript,
                React, and Node.js, and has a keen interest in emerging
                technologies like AI and blockchain. Jane is a frequent speaker
                at tech conferences and contributes to various open-source
                projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="dark:text-white font-semibold">
              Skills
            </CardContent>
            <CardFooter>
              <span className="bg-primary/10 text-primary rounded-full px-3 text-sm text-blue-500">
                JavaScript
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
      </TabsComponent>
    </div>
  );
};

export default Tabs;
