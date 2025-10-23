import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "icon" | "text";
  href?: string;
  onClick?: () => void;
}

export function Logo({
  className = "",
  variant = "default",
  href = "/",
  onClick,
}: LogoProps) {
  const logoContent = (
    <>
      {(variant === "default" || variant === "text") && (
        <span className={`font-bold font-lexend text-xl ${className}`}>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Shortlist
          </span>
          <span className="text-foreground">On.</span>
        </span>
      )}

      {variant === "icon" && (
        <div
          className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${className}`}
        >
          <span className="font-bold text-white text-sm font-lexend">SO</span>
        </div>
      )}
    </>
  );

  return (
    <Link
      href={href}
      className="flex-shrink-0 transition-transform hover:scale-105"
      aria-label="ShortlistOn Home"
      onClick={onClick}
    >
      {logoContent}
    </Link>
  );
}

// Favicon configuration
export const faviconConfig = {
  // Main favicon
  icon: "/logo.svg",
  shortcut: "/logo.svg",
  apple: "/logo.svg",

  // Favicon metadata
  type: "image/svg",
  sizes: "any",
};

// Alternative favicon options - uncomment to use
// export const faviconConfig = {
//   icon: "/favicon.svg",
//   shortcut: "/favicon.ico",
//   apple: "/apple-touch-icon.svg",
//   type: "image/svg",
//   sizes: "any",
// };
