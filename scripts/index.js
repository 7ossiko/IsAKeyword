const languages_keywords = {
    Python: ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'],
    CSharp: ['abstract', 'as', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char', 'checked', 'class', 'const', 'continue', 'decimal', 'default', 'delegate', 'do', 'double', 'else', 'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is', 'lock', 'long', 'namespace', 'new', 'null', 'object', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'ref', 'return', 'sbyte', 'sealed', 'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked', 'unsafe', 'ushort', 'using', 'virtual', 'void', 'volatile', 'while']
};

function is_keyword(language, keyword) {
    if (keyword == '')
        return;
    let keywords = languages_keywords[language];
    for (let i = 0; i < keywords.length; i++) {
        if (keyword == keywords[i])
        {
            document.getElementById('output').innerHTML = 'It is a keyword :(';
            return;
        }
    document.getElementById('output').innerHTML = 'Not a keyword :)';
    }
}

function load_form_languages() {
    languages = Object.keys(languages_keywords);
    for (let i = 0; i < languages.length; i++) {
        document.getElementById('languages').innerHTML += `<option value="${languages[i]}">${languages[i]}</option>`;
    }
}

load_form_languages();
