module.exports = [
"[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.6_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$libs$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/libs/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all
// outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
// disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20
// dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
// bg-background border shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50
// h-9 px-4 py-2 has-[>svg]:px-3
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[3px] text-sm font-semibold whitespace-nowrap text-white transition-all outline-none select-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary rounded-sm",
            outline: "border-outline-border text-primary hover:bg-state-hove rounded-lg border px-2.5 py-1.5 text-sm font-medium",
            destructive: "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 text-white shadow-xs",
            // secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: "hover:bg-state-hove rounded-md text-black dark:text-white",
            link: "text-primary w-fit",
            primary: "[--button-color-active:var(--primary-active)] [--button-color-hover:var(--primary-hover)] [--button-color:var(--primary)]",
            secondary: "[--button-color-active:var(--primary-active)] [--button-color-hover:var(--secondary-hover)] [--button-color:var(--secondary)]",
            tertiary: "[--button-color-active:var(--primary-active)] [--button-color-hover:var(--tertiary-hover)] [--button-color:var(--tertiary)]",
            warning: "[--button-color-active:var(--primary-active)] [--button-color-hover:var(--warning-hover)] [--button-color:var(--warning)]",
            danger: "[--button-color-active:var(--primary-active)] [--button-color-hover:var(--danger-hover)] [--button-color:var(--danger)]"
        },
        size: {
            default: "h-[32px] px-[12px] py-[6px] leading-[20px]",
            large: "",
            small: "",
            sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "h-8 w-8 p-1.5"
        },
        theme: {
            light: "bg-fill-500 hover:bg-fill-900 text-[var(--button-color)]",
            solid: "bg-[var(--button-color)] text-white hover:bg-[var(--button-color-hover)] active:bg-[var(--button-color-active)]",
            borderless: "hover:bg-fill-500 bg-transparent text-[var(--button-color)]",
            outline: "border-outline-border hover:bg-state-hove rounded-lg border px-2.5 py-1.5 text-sm font-medium",
            ghost: "hover:bg-state-hove rounded-md text-black dark:text-white"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
        theme: "light"
    }
});
function Button({ className, variant, asChild = false, theme, size, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$libs$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            theme
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Input({ className, type, ...props }) {
    const { placeholder, disabled } = props;
    const [isFocus, setIsFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handler = ()=>{
        setIsFocus(true);
    };
    // style={{ border: '1px solid rgba(0,100,250, 1)' }}
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-input-primary text-primary aria-invalid:bg-input-destructive flex h-8 w-full items-center rounded-[3px]",
        onClick: handler,
        "data-slot": "input",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            disabled: disabled,
            placeholder: placeholder,
            autoComplete: "off",
            className: "placeholder:text-input-placeholder box-border h-full min-w-0 flex-1 border-none bg-transparent px-3 text-sm text-inherit outline-none placeholder-shown:text-ellipsis"
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx",
            lineNumber: 25,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const test = [
    {
        name: "财务",
        id: 1
    },
    {
        name: "法务",
        id: 2
    },
    {
        name: "人事",
        id: 3
    },
    {
        name: "IT",
        id: 4
    },
    {
        name: "行政",
        id: 5
    }
];
function Sidebar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col border-r border-solid border-[red] py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "搜索角色"
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                    lineNumber: 32,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1 overflow-y-auto py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-72 px-5 pb-5",
                    children: test.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background-burn flex h-10 w-full items-center px-2",
                            children: item.name
                        }, item.id, false, {
                            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                            lineNumber: 37,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                    lineNumber: 35,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "w-full",
                    children: "新增角色"
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                    lineNumber: 44,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
}
}),
"[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarInset",
    ()=>SidebarInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const test = [
    {
        name: {
            first: "Tanner",
            last: "Linsley"
        },
        info: {
            age: 33,
            visits: 100
        }
    },
    {
        name: {
            first: "Kevin",
            last: "Vandy"
        },
        info: {
            age: 27,
            visits: 200
        }
    }
];
const columns = [
    {
        header: "First Name",
        accessorKey: "name.first"
    },
    {
        header: "Last Name",
        accessorKey: "name.last"
    },
    {
        header: "Age",
        accessorFn: (row)=>row.info.age
    }
];
function SidebarInset() {
    // const [data, setData] = useState(test);
    // const table = useReactTable<User>({
    //   columns,
    //   data: test,
    // });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full min-w-0 flex-1 flex-col gap-y-5 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full gap-x-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "行政"
                    }, void 0, false, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                        lineNumber: 70,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: "arzyjp4ozk14jvd"
                    }, void 0, false, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                        lineNumber: 71,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "0人"
                    }, void 0, false, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                        lineNumber: 72,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "搜索成员姓名"
                        }, void 0, false, {
                            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                            lineNumber: 76,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                        lineNumber: 75,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 items-center justify-end gap-x-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                children: "添加成员"
                            }, void 0, false, {
                                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                lineNumber: 79,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                children: "批量导入/导出"
                            }, void 0, false, {
                                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                lineNumber: 80,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                children: "移除成员"
                            }, void 0, false, {
                                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                lineNumber: 81,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                        lineNumber: 78,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=ozma_frontend_semi-design-pro_6f567146._.js.map