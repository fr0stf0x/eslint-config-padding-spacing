module.exports.rules = {
  "implicit-arrow-linebreak": 0,
  "curly": ["error"],
  "indent": [
    "error",
    2,
    {
      "SwitchCase": 1,
      "VariableDeclarator": "first",
      "MemberExpression": 1,
      "flatTernaryExpressions": false,
    }
  ],
  "space-before-blocks": "error",
  "keyword-spacing": "error",
  "semi": [
    "error",
    "always",
  ],
  "semi-spacing": [
    "error",
    {
      "before": false,
      "after": true
    }
  ],
  "lines-between-class-members": [
    "error",
    "always"
  ],
  "padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": [
        "const",
        "let",
        "var"
      ],
      "next": "*"
    },
    {
      "blankLine": "any",
      "prev": [
        "const",
        "let",
        "var"
      ],
      "next": [
        "const",
        "let",
        "var"
      ]
    },
    {
      "blankLine": "always",
      "prev": [
        "import"
      ],
      "next": "*"
    },
    {
      "blankLine": "any",
      "prev": [
        "import"
      ],
      "next": [
        "import"
      ]
    },
    {
      "blankLine": "always",
      "prev": "*",
      "next": [
        "export"
      ]
    },
    {
      "blankLine": "always",
      "prev": [
        "export"
      ],
      "next": [
        "export"
      ]
    },
    {
      "blankLine": "always",
      "prev": [
        "multiline-block-like",
        "multiline-const",
        "multiline-expression",
        "multiline-let"
      ],
      "next": [
        "multiline-block-like",
        "multiline-const",
        "multiline-expression",
        "multiline-let"
      ]
    },
    {
      "blankLine": "always",
      "prev": [
        "block-like"
      ],
      "next": "*"
    },
    {
      "blankLine": "always",
      "prev": [
        "multiline-block-like",
        "block-like",
        "if",
      ],
      "next": [
        "return"
      ]
    }
  ],
  "no-multiple-empty-lines": [
    "error",
    {
      "max": 1,
      "maxEOF": 1
    }
  ],
  "spaced-comment": [
    "error",
    "always",
    {
      "line": {
        "markers": [
          "/"
        ],
        "exceptions": [
          "-",
          "+"
        ]
      },
      "block": {
        "markers": [
          "!"
        ],
        "exceptions": [
          "*"
        ],
        "balanced": true
      }
    }
  ],
};