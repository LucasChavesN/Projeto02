const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    let obj = {
        nome: req.query.nome
    };

    res.render('home',obj)
})
router.get('/rota1',(req,res)=>{
    let obj = {
        disciplinas: [
            {nome: 'Gestão Ágil de Projetos', dia: 'Segunda-Feira'},
            {nome: 'Estrutura de Ddados', dia: 'Segunda-Feira'},
            {nome: 'Banco de Dados não relacional', dia: 'Terça-Feira'},
            {nome: 'Inglês 1', dia: 'Terça-Feira'},
            {nome: 'Desenvolvimento Web III', dia: 'Quarta-feira'},
            {nome: 'Interação Humano Computador',dia: 'Quarta-feira'},
            {nome: 'Álgebra Linear',dia: 'Quinta-feira'},
            {nome: 'Estrutura de Dados', dia: 'Quinta-Feira'},
            {nome: 'Técnicas de Programação II',dia:'Sexta-Feira'}
        ]};
    res.render('rota1',obj)
})
router.get('/rota2',(req,res)=>{
    let obj = {
        historico: [
            {
             cod: "AGO021",
             materia: "Gestão Ágil de Projetos de Software",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ESM100",
             materia: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
             ano: 20222,
             media: "--",
             frequencia: "--",
             observacao: "Aprovado"
            },
            {
             cod: "IAL010",
             materia: "Algoritmo e Lógica de Programação",
             ano: 20221,
             media: "7.90",
             frequencia: "90.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "IBD014",
             materia: "Modelagem de Banco de Dados",
             ano: 20221,
             media: "7.40",
             frequencia: "90.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "IBD015",
             materia: "Banco de Dados – Relacional",
             ano: 20222,
             media: "8.30",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "IED005",
             materia: "Estrutura de Dados",
             ano: 20222,
             media: "4.50",
             frequencia: "87.00%",
             observacao: "Reprovado por Nota"
            },
            {
             cod: "IED005",
             materia: "Estrutura de Dados",
             ano: 202231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },            
            {
             cod: "IBD016",
             materia: "Banco de Dados - Não relacional",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "IES011",
             materia: "Engenharia de Software I",
             ano: 20221,
             media: "8.70",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "IES012",
             materia: "Engenharia de Software II",
             ano: 20222,
             media: "6.0",
             frequencia: "90.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "IHC004",
             materia: "Interação Humano Computador",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ILP036",
             materia: "Técnica de Programação I",
             ano: 20222,
             media: "7.80",
             frequencia: "80.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "ILP037",
             materia: "Técnica de Programação II",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ING085",
             materia: "Inglês I",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ISO011",
             materia: "Sistemas Operacionais e Redes de Computadores",
             ano: 20221,
             media: "6.90",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "ISW028",
             materia: "Desenvolvimento Web I",
             ano: 20221,
             media: "8.80",
             frequencia: "82.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "ISW029",
             materia: "Desenvolvimento Web II",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ISW030",
             materia: "Desenvolvimento Web III",
             ano: 20231,
             media: "--",
             frequencia: "--",
             observacao: "Em Curso"
            },
            {
             cod: "ISW031",
             materia: "Design Digital",
             ano: 20221,
             media: "9.50",
             frequencia: "100.00%",
             observacao: "Aprovado por Nota e Frequência"
            },
            {
             cod: "MAT019",
             materia: "Matemática para Computação",
             ano: 20222,
             media: "8.20",
             frequencia: "95.00%",
             observacao: "Aprovado por Nota e Frequência"
            }
           ]};
    
    res.render('rota2',obj)
})

module.exports = router;