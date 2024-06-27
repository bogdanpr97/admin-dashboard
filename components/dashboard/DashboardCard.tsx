import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

function DashboardCard({ title, count, icon }: DashboardCardProps) {
  return (
    <article>
      <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0h3">
        <CardContent>
          <h2 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
            {title}
          </h2>
          <div className="flex gap-5 justify-center items-center">
            {icon}

            <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
              {count}
            </h3>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export default DashboardCard;
