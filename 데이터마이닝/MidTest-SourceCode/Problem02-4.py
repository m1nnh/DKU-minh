import numpy as np


def AND(x1, x2):
    x = np.array([x1, x2, 1])
    w = np.array([0.5, 0.5, -0.7])

    temp = np.dot(x, w.T)

    if temp <= 0:
        return 0
    else:
        return 1


def OR(x1, x2):
    x = np.array([x1, x2, 1])
    w = np.array([0.5, 0.5, -0.2])

    temp = np.dot(x, w.T)

    if temp <= 0:
        return 0
    else:
        return 1


def NAND(x1, x2):
    x = np.array([x1, x2, 1])
    w = np.array([-0.5, -0.5, 0.7])

    temp = np.dot(x, w.T)

    if temp <= 0:
        return 0
    else:
        return 1


def XOR(x1, x2):
    nand_gate = NAND(x1, x2)
    or_gate = OR(x1, x2)
    xor_gate = AND(nand_gate, or_gate)

    return xor_gate


for i in [0, 1]:
    for j in [0, 1]:
        for k in [0, 1]:
            print('(A : {0}, B : {1}, Carry in : {2}) (Carry out : {3}, Sum : {4})'.format(j, k, i,
                                                                                           OR(AND(XOR(j, k), i),
                                                                                              AND(j, k)),
                                                                                              XOR(XOR(j, k), i)))
