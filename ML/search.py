from entity import getEntities
from pattern.text.en import singularize

# takes a list of projectDescriptions and a list of tools & materials
# returns a list of "scores" for the projects in order to indicate search relevance
def searchScore(projectDescriptions, tools_materials):
    if len(tools_materials) == 0:
        return
    scoreList = []
    for projDesc in projectDescriptions:
        descEntities = getEntities(projDesc.lower())
        score = 0.0
        for tm in tools_materials:
            for descEnt in descEntities:
                if singularize(tm.lower()) == singularize(descEnt.name):
                    score += 1
        score = score / len(tools_materials)
        scoreList.append(score)
    return scoreList

if __name__ == "__main__":
    p = []
    tm = []
    with open("proj.txt", "r") as readfile:
        p =[line.strip() for line in readfile.read().split(";;;")]
        p = list(filter(None, p))
    with open("tm.txt", "r") as readfile:
        tm =[line.strip() for line in readfile.read().split(";;;")]
        tm = list(filter(None, tm))
    ret = searchScore(p, tm)
    print(ret)