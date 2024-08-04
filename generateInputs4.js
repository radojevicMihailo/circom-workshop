const { buildPoseidonOpt } = require("circomlibjs");
const { poseidon2 } = require("poseidon-lite");
const { writeFileSync } = require("fs");

async function generate(number, solution, inputsFilename) {
    const poseidon = await buildPoseidonOpt();

    const bigNumber = BigInt(number);
    const bigSolution = BigInt(solution);

    const salt = BigInt(123543578123736283);
    const commit = poseidon2([bigSolution, salt]);


    writeFileSync(inputsFilename, JSON.stringify({
        number: bigNumber.toString(),
        solution: bigSolution.toString(),
        commit: commit.toString(),
        salt: salt.toString(),
    }, null, 2));
}

generate(15, 15, "input4.json");