"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 800, minimum: 0.1 });

    // Start bar on path change
    NProgress.start();
    return () => NProgress.done(); // Finish bar when component unmounts
  }, [pathname]);

  return null;
}
