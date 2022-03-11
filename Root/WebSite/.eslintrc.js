module.exports = {
    parser: "@babel/eslint-parser",
    rules: {
        "default-case": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "semi": ["error", "always"],
        "semi-spacing": ["error", {"before": false, "after": true}],
        "semi-style": ["error", "last"],
        "no-extra-semi": 2,
        "no-this-before-super": "error",
        "eqeqeq": "error",
        "no-async-promise-executor": 1,
        "constructor-super": 2,
        "for-direction": 2,
        "getter-return": 2,
        "no-class-assign": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        /*"no-dupe-class-members": 2,   DISABLED BECAUSE IT GIVES FALSE NEGATIVES*/
        "no-dupe-else-if": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-ex-assign": 2,
        "no-fallthrough": 2,
        "no-func-assign": 2,
        "no-import-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        /*"no-loss-of-precision": 2,  DISABLED due to error "Definition for rule 'no-loss-of-precision' was not found." */
        "no-misleading-character-class": 2,
        "no-new-symbol": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 2,
        "no-self-assign": 2,
        "no-setter-return": 2,
        "no-sparse-arrays": 2,
        /*"no-undef": 2, DISABLED because too rigid*/
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        /*"no-unsafe-optional-chaining": 2 DISABLED due to error "Definition for rule 'no-unsafe-optional-chaining' was not found."*/
        /*"no-useless-backreference": 2 DISABLED due to error "Definition for rule 'no-useless-backreference' was not found."*/
        "use-isnan": 2,
        "valid-typeof": 2,
        /*"default-case-last": 2, DISABLED due to error "Definition for rule 'default-case-last' was not found."*/
        "default-param-last": 2,
        "no-array-constructor": 2,
        "no-redeclare": 1,
        "no-extra-boolean-cast": 2,
        "no-regex-spaces": 2,
        "no-shadow-restricted-names": 2,
        "no-unused-labels": 2,
        "no-useless-catch": 2,
        "no-useless-concat": 2,
        /*"no-useless-escape": 2 DISABLED, since it confuses legitimate escapings with unlegitimate ones */
        "no-useless-return": 1,
        "no-void": 2,
        "no-with": 2,
        "prefer-const": 2,
        /*"no-await-in-loop": 1, DISABLED, since it's doesn't seem to be really usefull */
        "require-atomic-updates": 1
    },
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false

        },
        requireConfigFile: false,
        ecmaVersion: 2018,
        babelOptions: {},
    },
};