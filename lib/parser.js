//ES6 => AST, AST => ES5
const fs = require("fs");
const babylon = require("babylon");
const traverse = require("babel-traverse").default;
const { transformFromAst } = require("babel-core");

module.exports = {

    getAST: (path) => {
        const sourceCode = fs.readFileSync(path, "utf-8");
        return babylon.parse(sourceCode, {
            sourceType: "module"
        });
    },

    getDependencies: (ast) => {
        const dependencies = [];
        traverse(ast, {
            ImportDeclaration: ({ node }) => {
                dependencies.push(node.source.value);
            }
        })
        return dependencies;
    },

    transform: (ast) => {
        const { code } = transformFromAst(ast, null, {
            presets: ["env"]
        });

        return code;
    }
}