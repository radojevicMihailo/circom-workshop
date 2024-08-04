const { buildPoseidonOpt } = require("circomlibjs");
const { poseidon1 } = require("poseidon-lite");
const { writeFileSync } = require("fs");

async function generate(number, range, inputsFilename) {
    const poseidon = await buildPoseidonOpt();

    const bigNumber = BigInt(number);
    const commit = poseidon1([bigNumber]);

    const rangeInput = range.map(el => el.toString());

    writeFileSync(inputsFilename, JSON.stringify({
        number: bigNumber.toString(),
        commit: commit.toString(),
        range: rangeInput,
    }, null, 2));
}

generate(20, [18, 50], "input2.json");