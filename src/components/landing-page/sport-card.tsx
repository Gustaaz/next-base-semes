import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface SportCardProps {
  title: string;
  description: string;
}

export function SportCard({ title, description }: SportCardProps) {
  return (
    <Card className="hover:-translate-y-1 transition-transform">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}