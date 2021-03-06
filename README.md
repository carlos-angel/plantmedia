<p align="center">
  <a href="https://platzi.com/cursos/next-2020/" target="_blank">
    <img alt="Curso de Next.js" src="https://static.platzi.com/media/achievements/badge-nextjs-2259fc68-f86b-486e-bc09-95311a887985.png" width="60" />
  </a>
</p>
<h1 align="center">
  Saga de Next.js de Platzi
</h1>
<p align="center">
  <a href="https://platzi-plantpedia.vercel.app" target="_blank">
    https://platzi-plantpedia.vercel.app
  </a>
</p>

Este repositorio recopila el proyecto de la Saga de Next.js dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com). Los cursos que componen la saga son:

* [Curso de Next.js: Sitios Est谩ticos y Jamstack](https://platzi.com/cursos/nextjs-jamstack)
* [Curso de Next.js: Internacionalizaci贸n de Aplicaciones Web con i18n](https://platzi.com/cursos/nextjs-internacionalizacion)
* [Curso de Next.js: Deploy a Producci贸n](https://platzi.com/cursos/nextjs-deploy)
* [Curso de Next.js: Grandes Datasets](https://platzi.com/cursos/nextjs-datasets)
* [Curso de Next.js: Autenticaci贸n](https://platzi.com/cursos/nextjs-auth)
* [Curso de Next.js: Seguridad con OWASP](https://platzi.com/cursos/nextjs-seguridad-owasp)

## Tabla de contenidos
* [馃攷 驴C贸mo trabajar en este proyecto?](#-c贸mo-trabajar-en-este-proyecto)
* [馃 Gu铆a r谩pida de desarrollo](#-gu%C3%ADa-r谩pida-para-desarrollar)
* [鈿欙笍 Importar contenido a Contentful](#%EF%B8%8F-importar-contenido-a-contentful)
* [馃鈥嶐煆? Otras preguntas y respuestas](#-otras-preguntas-y-respuestas)
* [馃悶 驴Encontraste un error o mejora?](#-encontraste-un-error-o-mejora)

## 馃攷 驴C贸mo trabajar en este proyecto?
El curso es totalmente pr谩ctico y progresivo. Este repositorio s贸lo existe como una gu铆a para cuando lo necesites. Puedes realizar todo el curso en tu propio proyecto y tu propio repositorio.


El repositorio y toda la saga est谩 dividido por etiquetas de Git. Empieza desde la etiqueta git correspondiente al m贸dulo del curso que te interese:

1.  Clona el repositorio, si no lo has hecho a煤n:

    ```sh
    git clone git@github.com:jonalvarezz/platzi-plantpedia.git
    ```


1.  Actualiza la informaci贸n de las etiquetas:

    ```sh
    git fetch --tags
    ```
    

1.  Lista las etiquetas disponibles:

    ```sh
    git tag
    ```
    
    Deber铆as ver algo como:

    ```sh
    0-inicio
    1-incremental-rendering
    10-react-query
    11-memoization
    ...
    ```

1.  Inicia un nuevo branch desde el punto que desees:

    ```sh
    git checkout -b el-nombre-de-mi-branch etiqueta-elegida

    # Por ejemplo, para crear un branch llamado 'dev' desde el m贸dulo '10-react-query'
    git checkout -b dev 10-react-query
    ```

    馃敟 Eso es todo, ya puedes iniciar con todos los cambios inclu铆dos hasta ese m贸dulo.

    > 馃挕 En la secci贸n de [Releases](https://github.com/jonalvarezz/platzi-plantpedia/releases) puedes encontrar toda la lista de etiquetas.

<details><summary>驴C贸mo subo mis cambios a otro repositorio?</summary><p>

Git permite manejar varios repositorios remotos en una misma copia local. [Aqu铆 encuentras m谩s informaci贸n](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) y te dejar茅 el cheatsheet a continuaci贸n:
  
```sh
# Crea tu nuevo repositorio en GitHub/GitLab/otro. 
# Asumamos la URL es git@github.com:jonalvarezz/mi-repo-mas-bello.git
# Agrega el nuevo remote

git remote add mi-repo git@github.com:jonalvarezz/mi-repo-mas-bello.git

# Para push
git push mi-repo branch-a-hacer-push


# Para pull
git pull mi-repo branch-a-hacer-push
```
</p></details>


## 馃 Gu铆a R谩pida Para Desarrollar

1. Instala dependencias

    ```sh
    yarn
    ```

1. Inicia el proyecto

    ```sh
    yarn dev
    ```

    El sitio estar谩 disponible en http://localhost:3000.

> 鈿狅笍 Dependiendo del lugar en la saga donde te ubiques podr铆as necesitar algunas Variables de Entorno. Revisa [`.env.local.example`](https://github.com/jonalvarezz/platzi-plantpedia/blob/main/.env.local.example) y el [Curso de Next.js: Deploy a Producci贸n](https://platzi.com/cursos/nextjs-deploy)


## 鈿欙笍 Importar contenido a Contentful

El proyecto utiliza un Content Management System (CMS) llamado [Contenful](https://www.contentful.com/). En el primer curso de esta Saga [Next.js: Sitios Est谩ticos y Jamstack](https://platzi.com/cursos/nextjs-jamstack) vemos en detalle como configurarlo.

Los pasos son:

1. Crea una cuenta en [Contentful](https://www.contentful.com) y crea un nuevo espacio (Space) vacio.

1. Crea un nuevo **Content Managment Token**, guarda su valor y el de tu **Space ID**.
   > 馃挕 Lo generas desde Your Space > Settings > API Keys > Content Management tokens.

1. Modifica el archivo `import/config.json` con los valores del punto anterior.

    ```sh
    cd platzi-plantpedia
    nano import/config.json
    ```
    
1. Instala la herramienta CLI de Contentful:

    ```sh
    npm install -g contentful-cli
    ```

1. Corre el siguiente comando desde la raiz de este proyecto:

    ```sh
    cd platzi-plantpedia
    contentful space import --config import/config.json
    ```
    
    > 馃挕 La importaci贸n puede tardar varios minutos.
    

1. En el navegador, verifica que el contenido se haya importado en la pesta帽a **Model** y **Content**.

    > 馃挕 Deber铆as ver al menos 400 registros creados entre entradas e im谩genes.


1. Adicionalmente, puedes interactuar con tu contenido utilizando el [explorador de GraphQL](https://www.contentful.com/developers/docs/references/graphql/):

    Abre en tu navegador: `https://graphql.contentful.com/content/v1/spaces/{SPACE}/explore?access_token={CDA_TOKEN}`
    
    > 馃挕 Reemplaza `{SPACE}` y `{CDA_TOKEN}` por tus valores propios.



## 馃鈥嶐煆? Otras preguntas y respuestas

<details><summary>驴C贸mo se creo la carpeta `api` y `api/generated`?</summary><p>

> 馃挕 Si utilizas este repositorio como lo vimos en clase y usas el [contenido de Contentful que se provee](#%EF%B8%8F-importar-contenido-a-contentful), no es necesario correr o realizar algo para la auto-generaci贸n de c贸digo.

Gracias a que utilizamos GraphQL, **auto-generamos** el archivo `api/generated/graphql.ts` para producir:
* Los tipos de datos del Modelo de nuestro contenido
* El tipo esperado en la respuesta de cada API
* Una funci贸n lista (`getSdk`) para realizar el fetch de cada URL.

> 馃挕 El c贸digo es auto-generado usando `graphql-codegen`. No se vi贸 en clase pero se dejo como reto avanzado.

Otros datos claves son:
* `queries.graphql` indica todo lo que se debe auto-generar.
* `codegen.yml` es el archivo de configuraci贸n.
* La auto-generaci贸n se puede correr con:

  ```sh
  ACCESS_TOKEN=<access_token> SPACE_ID=<space_id> yarn build:schema
  ```

Luego, el archivo `api/index.ts` y `api/selectors.ts` son una capa que ge creado encima 鈥? un _wrapper_ 鈥? para exportar funciones y tipos m谩s f谩ciles de usar.

</p></details>

<details><summary>La librer铆a X no est谩 en su 煤ltima versi贸n</summary><p>



Si te encuentras trabajando desde una de las etiquetas de git es posible que las librer铆as no est茅n en su versi贸n m谩s actual. 

Para obtener el proyecto funcionando con las versiones m谩s actualizadas deber谩s crear un branch desde el 煤ltimo commit de `main`:

```sh
git fetch
git checkout -b dev origin/main`
```

> 馃挕 El 煤ltimo commit tambi茅n representa el proyecto terminado con todas las sagas incluidas.

Las versiones de las librer铆as solo se mantienen actualizadas al final proyecto pero no se hace en cada etiqueta de git para no introducir cambios que causen que el c贸digo sea diferente al visto en la clase.
</p></details>


## 馃悶 驴Encontraste un error o mejora?
Ayuda a otros estudiantes con eso que acabas de descubrir que har铆a este curso y respositorio mucho mejor.
* En [Issues](https://github.com/jonalvarezz/platzi-plantpedia/issues/new) puedes reportar errores, agregar sugerencias y comentarios.
* Por su parte, los [Pull Request](https://github.com/jonalvarezz/platzi-plantpedia/pulls) siempre estar谩n abiertos para recibir mejoras puntuales.

Happy hacking!
