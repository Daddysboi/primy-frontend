'use client';

import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "../../utils/utils";
import { Label } from "./label";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    value?: string;
    id?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        { className, onChange, value, id, label,rows = 6,  ...props }: TextareaProps,
        ref: React.Ref<HTMLTextAreaElement>
    ) => {
        const radius = 1000;

        const [visible, setVisible] = React.useState(false);

        let mouseX = useMotionValue(0);
        let mouseY = useMotionValue(0);

        function handleMouseMove({ currentTarget, clientX, clientY }: any) {
            let { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <InputContainer className="">
                <Label htmlFor={id}>{label}</Label>
                <motion.div
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                var(--blue-300),
                transparent 80%
              )
            `,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                    className="p-[2px] rounded-lg transition duration-300 group/input"
                >
                    <textarea
                        onChange={onChange}
                        value={value}
                        id={id}
                        className={cn(
                            `flex  w-full border rounded-sm px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
                            className
                        )}
                        rows={rows}
                        ref={ref}
                        {...props}
                    />
                </motion.div>
            </InputContainer>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };

interface InputContainerProps {
    children: React.ReactNode;
    className?: string;
}

const InputContainer: React.FC<InputContainerProps> = ({ children, className }) => {
    return <div className={cn("w-full", className)}>{children}</div>;
};
