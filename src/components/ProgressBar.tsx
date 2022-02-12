import { ColorType } from "@customTypes/colors";
import { backgroundColorFallback } from "@helpers/fallback";

type IProps = {
  color: ColorType;
  progress: number;
};

function ProgressBar({ color, progress }: IProps) {
  return (
    <div className="w-24 h-5 rounded-md overflow-hidden">
      <div
        style={{ width: `${progress}%` }}
        className={`flex items-center ${backgroundColorFallback(color)} h-full`}
      >
        <span className="text-xs font-bold tracking-widest pl-2">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
