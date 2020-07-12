// import ClasseUsuario, { idade as IdadeUsuario } from './functions'

// ClasseUsuario.info()

// alert(IdadeUsuario);

import { umPorSegundo, getUserFromGithub, Github, buscaUsuario } from './async-await'

umPorSegundo()


getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');



Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
Github.getRepositories('lucaslopes0198/scrapy-amazon');


buscaUsuario('diego3g');
