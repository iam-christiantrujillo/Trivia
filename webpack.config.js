const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //SE manda a llamar 

module.exports = {
    module:{
        rules: [  //Aqui va a cargar todos los loaders que necesito para que webpack trabaje como quiera 
            {
                test: /\.html$/, //expresion regular ---> busca todos los archivos que terminen en .html
                use: [
                    {
                    loader: "html-loader", //Este va a traducir todo el html para que todo el webpack lo entienda
                    options: {minimize: true}
                    }
                ]
                //test ---> que tengo que buscar 
                //use ---> de lo que encontre que loader voy a aplicar 
            },
            {
                test:/\.js$/,  //Va a buscar todos los archivos js en mi pryecto 
                exclude: /node_modules/,  //le digo que no busque en la carpeta de node_modules
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.scss$/,
                use: [//Los loader el orden si importa 
                    "style-loader", //Procesa estilos en line
                    "css-loader",  //Procesa estilos en archivo css
                    "sass-loader"  //Procesa estilos en archivos scss (sass)

                ]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo de html va a a ser el base para mi proyecto
            filename:"./index.html" //Que unico archivo de html se va a generar 
        }),
        new MiniCssExtractPlugin({ //es opcional
            filename: "[name].css",
            chunkFilename: "[id].css" //solo es el caso si hay mucho css hay muchas lineas de css
        })
    ]
    
}