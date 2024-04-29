import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
import { toast } from 'sonner';

export function cn(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}

export function toLabel(input: string): string {
  return input.replace(/(?<lower>[a-z])(?<upper>[A-Z])/g, '$<lower> $<upper>').replace(/^./, str => str.toUpperCase());
}

export function copyText(input: string, alert?: boolean): void {
  navigator.clipboard.writeText(input);
  if (alert) toast.success('Copied to clipboard', { description: input, action: { label: 'Dismiss', onClick: () => { } } });
}