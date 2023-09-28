import { _getUserInput } from './utils'

const main = async () => {
    console.log("Hanoi Towers via indução/recursão ver 1. 0 - IFMG 2023")
    console.log("Desenvolvido como trabalho prático para a disciplina de Projeto e Analise de Algoritmos")
    console.log("Autores : Lucas & Maria")

    // função recursiva que implementa o algoritmo das Torres de Hanói
    const hanoiTowers = (numberOfDisks: number, sourcePin: string, destinationPin: string, auxiliaryPin: string) => {
        //condição de parada da recursão
        if (numberOfDisks === 1) {
            console.log(`Mover o disco 1 de ${sourcePin} para ${destinationPin}`)
            return
        }
    
        // move todos os discos, exceto o maior, do pino de origem para o pino auxiliar,
        // usando o pino de destino como intermediário
        hanoiTowers(numberOfDisks - 1, sourcePin, auxiliaryPin, destinationPin)

        console.log(`Mover o disco ${numberOfDisks} de ${sourcePin} para ${destinationPin}`)

        // move os discos que foram temporariamente colocados no pino auxiliar para o pino de destino
        hanoiTowers(numberOfDisks - 1, auxiliaryPin, destinationPin, sourcePin)
    }

    const firstTower = await _getUserInput('Qual o nome do primeiro pino?')
    const secondTower = await _getUserInput('Qual o nome do segundo pino?')
    const thirdTower = await _getUserInput('Qual o nome do terceiro pino?')
    
    let numberOfDisks = 'default'
    while (numberOfDisks !== 'quit') {
        // recupera o número de discos informado pelo usuário
        numberOfDisks = await _getUserInput('Quantos discos deseja mover?')
        if (parseInt(numberOfDisks) > 0) {
            hanoiTowers(Number(numberOfDisks), firstTower, thirdTower, secondTower)
        } else if (numberOfDisks !== 'quit') {
            console.log("Por favor, insira um número inteiro positivo.")
        }
    }
}

main()
