import { AreaChartInteractive } from "@/components/charts/area-chart-interactive";
import { BarChartMultiple } from "@/components/charts/bar-chart-multiple";
import { PieChartDonut } from "@/components/charts/pie-chart-donut";
import { RadarChartCircle } from "@/components/charts/radar-chart-circle";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <PieChartDonut />
        <RadarChartCircle />
        <BarChartMultiple />
      </div>
        <AreaChartInteractive />
    </div>
  );
}
