module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["AvenirArabic"],
    },
    borderColor: (theme) => ({
      muted: "var(--border-muted)",
      muted2: "var(--border-muted2)",
      "muted-btn": "var(--border-muted-btn)",
      primary: "var(--border-primary)",
      inverted: "var(--border-inverted)",
    }),

    screens: {
      xs: "375px",
      sm: "768px",
      lg: "1024px",
      xl: "1032px",
    },
    colors: {
      active: "var(--bg-active)",
      hover: "var(--bg-hover)",
    },
    extend: {
      textColor: {
        "base-color": "var(--text-base)",
        inverted: "var(--text-inverted)",
        muted: "var(--text-muted)",
        active: "var(--text-active)",
        disabled: "var(--text-disabled)",
        error: "var(--text-error)",
      },
      backgroundColor: {
        base: "var(--bg-base)",
        muted: "var(--bg-muted)",
        muted2: "var(--bg-muted2)",
        row: "var(--bg-row)",
        active: "var(--bg-active)",
        hover: "var(--bg-hover)",
        primary: "var(--btn-primary)",
        secondary: "var(--btn-secondary)",
        disabled: "var(--bg-disabled)",
        inverted: "var(--bg-inverted)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
