pragma circom 2.0.0;

include "./node_modules/circomlib/poseidon.circom";
include "./node_modules/circomlib/comparators.circom";

template RangeProof(N) {
    assert(N <= 252); 
    signal input number;
    signal input commit;
    signal input range[2];

    signal output out;

    component hash = Poseidon(1);
    hash.inputs[0] <== number;
    commit === hash.out;

    component geq = GreaterEqThan(N);
    geq.in[0] <== number;
    geq.in[1] <== range[0];

    component leq = LessEqThan(N);
    leq.in[0] <== number;
    leq.in[1] <== range[1];

    out <== geq.out * leq.out;
}

component main { public [commitment, range] } = RangeProof(10);