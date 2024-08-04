## Linkovi

[Dokumentacija](https://docs.circom.io/)

[zkREPL](https://zkrepl.dev/)

[Circomlib](https://github.com/iden3/circomlib/tree/master)

[Tau ceremonija](https://github.com/iden3/snarkjs/tree/master)

[Awesome zero knowledge proofs (zkp)](https://github.com/matter-labs/awesome-zero-knowledge-proofs)

## Kola

kolo1.circom
* Multiplier2
* Multiplier3

kolo2.circom
* Range proof
* circomlib kola
    * multiplexer
    * comparators
    * poseidon

kolo3.circom
* Membership proof
* Generisanje inputa za kolo
* verifikacija na frontendu

kolo4.circom
* guess the number
* tau ceremonija
* verifikacija na contractu

## PLONK vs Groth16

### PLONK
* kolo4
* prednosti:
    * kratko i konstantno vreme verifikacije
* mane:
    * veći dokazi i sporije se generišu
* Aztec, ZKSync and Dusk

### Groth16
* kolo3
* prednosti:
    * konstantna veličina dokaza
* mane:
    * potreban je circuit-specific trusted setup
* ZCash, Looping, Hermez, Celo and Filecoin


## Komande

`npm i circomlib`
`npm i snarkjs`
`npm i circomlibjs`