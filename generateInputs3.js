const { buildPoseidonOpt } = require("circomlibjs");
const { poseidon1, poseidon2 } = require("poseidon-lite");
const { writeFileSync } = require("fs");
const { IMT } = require("@zk-kit/imt");

async function generate(number) {
    const poseidon = await buildPoseidonOpt();

    const numberLeaves = [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n];
    let leaves = [];
    for (let i = 0; i < 8; i++) {
        leaves.push(poseidon1([numberLeaves[i]]));
    }

    const numberHash = poseidon1([BigInt(number)]);

    const tree = new IMT(poseidon2, 3, 0, 2, leaves);
    const proof = tree.createProof(2)
    const { pathIndices: pathIndicesRaw, siblings: siblingsRaw } = proof;

    const pathIndices = pathIndicesRaw.map(el => el.toString());
    const siblings = siblingsRaw.map(el => el.toString());

    writeFileSync("input3.json", JSON.stringify({
        leaf: numberHash.toString(),
        pathIndices,
        siblings,
    }, null, 2));
}

generate(3);