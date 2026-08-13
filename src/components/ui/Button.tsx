import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'terracotta' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-[11px]",
    md: "px-5 py-3 text-xs",
    lg: "px-7 py-4 text-xs tracking-widest",
  };

  const variantStyles = {
    primary: "bg-[#F97316] hover:bg-amber-600 text-white shadow-md shadow-[#F97316]/20 hover:shadow-lg hover:shadow-[#F97316]/30",
    secondary: "bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#F97316] shadow-xs",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200",
    terracotta: "bg-[#C2785C] hover:bg-[#a66248] text-white shadow-md shadow-[#C2785C]/20",
    dark: "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-md",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
    </motion.button>
  );
};
