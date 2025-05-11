
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-body font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md',
				outline:
          'border border-teal-ink bg-transparent text-teal-ink hover:bg-teal-ink/10 hover:text-teal-ink shadow-sm hover:shadow-md',
				secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md',
				ghost: 'hover:bg-sand/70 hover:text-teal-ink',
				link: 'text-teal-ink underline-offset-4 hover:underline hover:opacity-80',
			},
			size: {
				default: 'h-10 px-5 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8 text-base',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const MotionButton = motion(React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
}));
MotionButton.displayName = 'Button';

const Button = React.forwardRef(({ ...props }, ref) => (
  <MotionButton
    ref={ref}
    whileHover={{ y: -2, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
    whileTap={{ scale: 0.97, y: 0, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
    {...props}
  />
));
Button.displayName = 'Button';


export { Button, buttonVariants };
