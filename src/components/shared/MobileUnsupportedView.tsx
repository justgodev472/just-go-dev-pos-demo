"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import { Monitor, Smartphone, LogOut, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePOS } from "@/context/POSContext";
import { Button } from "@/components/ui/button";

function emptySubscribe() {
  return () => {};
}

export function MobileUnsupportedView() {
  const { dictionary } = useLanguage();
  const { user, logout } = usePOS();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background via-muted/30 to-background text-foreground text-center select-none">
      <div className="w-full max-w-md bg-card/90 backdrop-blur-xl border border-border/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Brand Logo & Header */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-16 relative flex items-center justify-center shrink-0">
            <Image
              src="/jgd-latets-logo-no-bg.png"
              alt="JustGoDev Logo"
              width={120}
              height={120}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-base tracking-tight text-foreground">
              JustGoDev POS
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
              <Sparkles className="w-3 h-3" /> POS
            </span>
          </div>
        </div>

        {/* Visual Device Alert Icon */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-amber-500/10 dark:bg-amber-500/20 animate-pulse" />
          <div className="relative flex items-center justify-center gap-2">
            <div className="p-3.5 rounded-2xl bg-muted border border-border/80 text-muted-foreground">
              <Smartphone className="w-6 h-6 text-rose-500 line-through" />
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="p-3.5 rounded-2xl bg-primary/15 border border-primary/30 text-primary">
              <Monitor className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Notice Headings */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Screen Resolution Warning</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug">
            {dictionary.common.mobileUnsupportedTitle}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {dictionary.common.mobileUnsupportedDesc}
          </p>
        </div>

        {/* Resolution Specification Pill */}
        <div className="p-3 rounded-2xl bg-secondary/50 border border-border/70 text-[11px] text-muted-foreground font-medium">
          {dictionary.common.mobileUnsupportedMinResolution}
        </div>

        {/* User Session Info & Logout Button */}
        {isMounted && user && (
          <div className="pt-2 border-t border-border/70 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-left min-w-0">
              <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                {user.avatar || "JD"}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs truncate text-foreground leading-tight">
                  {user.name}
                </p>
                <p className="text-[10px] text-muted-foreground truncate capitalize">
                  {user.role}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="gap-1.5 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/30 border-rose-200 dark:border-rose-900/50 cursor-pointer shrink-0"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{dictionary.common.mobileUnsupportedLogout}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
