(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.6_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$libs$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/libs/utils.ts [app-client] (ecmascript)");
"use client";
;
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
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[3px] text-sm font-semibold whitespace-nowrap text-white transition-all outline-none select-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", {
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
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "ddb5ebb78076925abfdd6a9246d1cdd75a5925665ffa0a11cbc2957779104f7d") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ddb5ebb78076925abfdd6a9246d1cdd75a5925665ffa0a11cbc2957779104f7d";
    }
    let className;
    let props;
    let size;
    let t1;
    let theme;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, theme, size, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = theme;
        $[7] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        theme = $[6];
        variant = $[7];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[8] !== className || $[9] !== size || $[10] !== theme || $[11] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$libs$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            theme
        }), className);
        $[8] = className;
        $[9] = size;
        $[10] = theme;
        $[11] = variant;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    let t3;
    if ($[13] !== Comp || $[14] !== props || $[15] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[13] = Comp;
        $[14] = props;
        $[15] = t2;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Input(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "37aad0975ef83a8c48e14e983717e9ba515d37608ff6c8c357dc32be1dfd9b21") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37aad0975ef83a8c48e14e983717e9ba515d37608ff6c8c357dc32be1dfd9b21";
    }
    let props;
    let type;
    if ($[1] !== t0) {
        const { className, type: t1, ...t2 } = t0;
        type = t1;
        props = t2;
        $[1] = t0;
        $[2] = props;
        $[3] = type;
    } else {
        props = $[2];
        type = $[3];
    }
    const { placeholder, disabled } = props;
    const [, setIsFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Input[handler]": ()=>{
                setIsFocus(true);
            }
        })["Input[handler]"];
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handler = t1;
    let t2;
    if ($[5] !== disabled || $[6] !== placeholder || $[7] !== type) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            disabled: disabled,
            placeholder: placeholder,
            autoComplete: "off",
            className: "placeholder:text-input-placeholder box-border h-full min-w-0 flex-1 border-none bg-transparent px-3 text-sm text-inherit outline-none placeholder-shown:text-ellipsis"
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = disabled;
        $[6] = placeholder;
        $[7] = type;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== props || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-input-primary text-primary aria-invalid:bg-input-destructive flex h-8 w-full items-center rounded-[3px]",
            onClick: handler,
            "data-slot": "input",
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[9] = props;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_s(Input, "5oc1sLstgFPUgp3Qx11pf7GZNy8=");
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-client] (ecmascript)");
"use client";
;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "27f9a7622684e60d02c61c04ddfc2a76bf301c53189afa08e2b387a183a6c067") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27f9a7622684e60d02c61c04ddfc2a76bf301c53189afa08e2b387a183a6c067";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                placeholder: "\u641C\u7D22\u89D2\u8272"
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                lineNumber: 32,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-0 flex-1 overflow-y-auto py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-72 px-5 pb-5",
                children: test.map(_SidebarTestMap)
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                lineNumber: 39,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col border-r border-solid border-[red] py-5",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "w-full",
                        children: "新增角色"
                    }, void 0, false, {
                        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                        lineNumber: 46,
                        columnNumber: 118
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
                    lineNumber: 46,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = Sidebar;
function _SidebarTestMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background-burn flex h-10 w-full items-center px-2",
        children: item.name
    }, item.id, false, {
        fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarInset",
    ()=>SidebarInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@playwright+test@1.58.2_babel-plugin-react-compiler@1.0_32c0f929346171034124cd5c34375d81/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/button/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ozma/frontend/semi-design-pro/components/ui/input/input.tsx [app-client] (ecmascript)");
"use client";
;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "38f41d562eb97adc2b7215bcca8de5bdbded352aa56b6314d42c83708ea396ff") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38f41d562eb97adc2b7215bcca8de5bdbded352aa56b6314d42c83708ea396ff";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full gap-x-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "行政"
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                    lineNumber: 59,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: "arzyjp4ozk14jvd"
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                    lineNumber: 59,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "0人"
                }, void 0, false, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                    lineNumber: 59,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$input$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                placeholder: "\u641C\u7D22\u6210\u5458\u59D3\u540D"
            }, void 0, false, {
                fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                lineNumber: 66,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full min-w-0 flex-1 flex-col gap-y-5 p-5",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-1 items-center justify-end gap-x-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: "添加成员"
                                }, void 0, false, {
                                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                    lineNumber: 73,
                                    columnNumber: 184
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: "批量导入/导出"
                                }, void 0, false, {
                                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                    lineNumber: 73,
                                    columnNumber: 205
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_32c0f929346171034124cd5c34375d81$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ozma$2f$frontend$2f$semi$2d$design$2d$pro$2f$components$2f$ui$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: "移除成员"
                                }, void 0, false, {
                                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                                    lineNumber: 73,
                                    columnNumber: 229
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                            lineNumber: 73,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
                    lineNumber: 73,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ozma/frontend/semi-design-pro/feature/role/components/sidebar-inset.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = SidebarInset;
var _c;
__turbopack_context__.k.register(_c, "SidebarInset");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ozma_frontend_semi-design-pro_7dbf564d._.js.map