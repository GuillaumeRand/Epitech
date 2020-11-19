from math import *


def setPoint(x, y):
    return ([x, y, 1])


def matricTranslate(i, j):
    return ([
        [1, 0, i],
        [0, 1, j],
        [0, 0, 1]
    ])


def matricScaling(m, n):
    return ([
        [m, 0, 0],
        [0, n, 0],
        [0, 0, 1]
    ])


def matricRotate(d):
    return ([
        [cos(d), -sin(d), 0],
        [sin(d), cos(d), 0],
        [0, 0, 1]
    ])


def matricReflex(d):
    return ([
        [cos(2*d), sin(2*d), 0],
        [sin(2*d), - cos(2*d), 0],
        [0, 0, 1]
    ])


def multipleMatric():
    d = [[3, 2, 1],
         [2, 1, 3]]
    e = [[3, 6, 2],
         [5, 2, 2]]


print(d)
