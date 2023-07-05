const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe'
];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf('.bat');
        return existeExtensao !== -1;
    });

    if (resultado) {
        console.log('vírus detectado');
    } else {
        console.log('nenhum vírus encontrado');
    }
}

antiVirus(arquivos);