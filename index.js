import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678955);
diretor.cadastrarSenha("123456789")

const gerente = new Gerente ("Ricardo", 5000, 98765432150);
gerente.cadastrarSenha("12345")

const cliente = new Cliente("Renata", 56849731244, "456")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)