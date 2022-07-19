A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.

São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)


 Feature: Adicionar cupom expirado
    @TestCaseKey=TCX-T8
    Scenario: Adicionar cupom expirado
        
        Given eu estou logado no app
        And tenho um produto no carrinho
        When eu adiciono um cupom expirado
        Then ele mostra a mensagem de cupom expirado

        Feature: Listar Endereço com localização aproximada com sucesso
    @TestCaseKey=TCX-T481
    Scenario: Listar Endereço com localização aproximada com sucesso
        
        Given estou na tela de endereços
        And não existe nenhum endereço cadastrado
        When listado os endereços
        Then exibir o endereço resgatado pela geolocalização