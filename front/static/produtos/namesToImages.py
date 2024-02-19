from shutil import copy

file = open("produtos.txt", "r")

for line in file:
    path = line.removeprefix("VM3698:1 produtos/").strip()
    srcPath='imagem.png'
    destinationPath= path + ".png"
    copy(srcPath,destinationPath)


