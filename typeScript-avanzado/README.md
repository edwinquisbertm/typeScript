# Preparación del Entorno de Trabajo

- creación del archivo .gitignore // para el contenido utilizamos la web https://www.toptal.com/developers/gitignore/
generamos para: windows - linux - macos - node

- Ahora creamos el archivo .editorconfig y agregamos este código:
(( # Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false> ))

- package.json ejecutamos en la terminal:
npm init -y

- ahora instalamos el typescript con:
npm i typescript --save-dev

- para verificar la instalación colocamos
npx tsc --version

- para crear el tsconfig.json debemos ejecutar:
npx tsc --init

- ahora en el tsconfig.json modificamos los siguientes archivos:
"outDir": "./dist",

- Para transpilar utilizamos
npx tsc --watch

## Instalación de ts-node
npm install -D ts-node

Una vez instalado solo tendremos que ejecutar el comando:
npx ts-node ./src/demo.ts
de esa forma evitaremos tener la necesidad de transpilar los archivos para trabajar en entornos desarrollo o en produccion al uso de backend. Pero para frontend necesitaremos si o si trabajar con javascript nativo por lo que tendremos que transpilar.