"use client";

import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  name: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  delay?: number;
}

export function FormField({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  options = [],
  value,
  onChange,
  delay = 0,
}: FormFieldProps) {
  const baseInputStyles = `
    w-full px-5 py-4 rounded-xl
    bg-white border-2 border-wedding-primary/20
    text-wedding-text placeholder:text-wedding-text/50
    focus:outline-none focus:ring-2 focus:ring-wedding-primary/40 focus:border-wedding-primary
    hover:border-wedding-primary/40
    transition-all duration-300
    font-sans text-base
    shadow-sm hover:shadow-md
  `;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <label className="block mb-2 text-sm font-semibold text-wedding-text/90 uppercase tracking-wider">
        {label}
        {required && <span className="text-wedding-accent ml-1">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          rows={4}
          className={`${baseInputStyles} resize-none`}
          style={{ backgroundColor: '#ffffff', color: '#3d3d3d' }}
        />
      ) : type === "select" ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`${baseInputStyles} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23b8860b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-12`}
          style={{ backgroundColor: '#ffffff', color: '#3d3d3d' }}
        >
          <option value="" style={{ backgroundColor: '#ffffff', color: '#3d3d3d' }}>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              style={{ backgroundColor: '#ffffff', color: '#3d3d3d' }}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={baseInputStyles}
          style={{ backgroundColor: '#ffffff', color: '#3d3d3d' }}
        />
      )}
    </motion.div>
  );
}
