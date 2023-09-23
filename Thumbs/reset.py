import os

from os import path,listdir



dirfiles  =  listdir("./thumbs")
for i in range(dirfiles.__len__()):
    if dirfiles[i].__contains__("screenshot"):
        os.rename(path.join("./thumbs",dirfiles[i]),path.join("./thumbs",f"screenshot_{i}.png"))


