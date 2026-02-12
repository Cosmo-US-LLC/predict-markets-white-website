import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const buttonBgImage = 'https://www.figma.com/api/mcp/asset/3dbfe55d-5111-4f29-b7a9-11cf796f6869';

export function CarouselLeftArrow({ className, onClick, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-[52px] h-[52px] rounded-[40px] border-0 text-white hover:cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
        className
      )}
      style={{
        backgroundImage: `url('${buttonBgImage}')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px 0px',
      }}
      {...props}
    >
      <ChevronRight className="h-6 w-6 rotate-180" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

export function CarouselRightArrow({ className, onClick, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-[52px] h-[52px] rounded-[40px] border-0 text-white hover:cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
        className
      )}
      style={{
        backgroundImage: `url('${buttonBgImage}')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px 0px',
      }}
      {...props}
    >
      <ChevronRight className="h-6 w-6" />
      <span className="sr-only">Next slide</span>
    </button>
  );
}