#-------------------------------------------------------------------------------
# Name:            LetterFreq.py
#
# Author:          Steven Tammen
#
# Email:           steven@steventammen.com
#
# Created:         01/08/2016
#
# Copyright:       No
#-------------------------------------------------------------------------------

from csv import *

#specifies names of plain text files to make a corpus
#for the frequency analysis. I was lazy and used relative
#references, but if you specify the paths unambiguously there
#is no reason why this script needs to be in the same
#directory as the files.
fileNames = (
    "1Theo.txt",
    "2A-Angelo.txt",
    "3A-Anthro.txt",
    "3B-Hamartio.txt",
    "4A-Christo.txt",
    "4B-Soterio.txt",
    "5-Pneumato.txt",
    "E1.txt",
    "E2.txt",
    "E3.txt",
    "E4.txt",
    "E5.txt",
    "E6.txt",
    "E7.txt",
    "Exodus-intro.txt",
    "Genesis-Questions.txt",
    "ICHTHYS-Acronym.txt",
    "intro.txt",
    "matthew-questions.txt",
    "Pet00.txt",
    "Pet01.txt",
    "Pet02.txt",
    "Pet03.txt",
    "Pet04.txt",
    "Pet05.txt",
    "Pet06.txt",
    "Pet07.txt",
    "Pet08.txt",
    "Pet09.txt",
    "Pet10.txt",
    "Pet11.txt",
    "Pet12.txt",
    "Pet13.txt",
    "Pet14.txt",
    "Pet15.txt",
    "Pet16.txt",
    "Pet17.txt",
    "Pet18.txt",
    "Pet19.txt",
    "Pet20.txt",
    "Pet21.txt",
    "Pet22.txt",
    "Pet23.txt",
    "Pet24.txt",
    "Pet25.txt",
    "Pet26.txt",
    "Pet27.txt",
    "Pet28.txt",
    "Pet29.txt",
    "Pet30.txt",
    "Pet31.txt",
    "readbible.txt",
    "Salvation.txt",
    "SR1.txt",
    "SR2.txt",
    "SR3.txt",
    "SR4.txt",
    "SR5.txt",
    "Tribulation-Part1.txt",
    "Tribulation-Part2A.txt",
    "Tribulation-Part2B.txt",
    "Tribulation-Part3A.txt",
    "Tribulation-Part3B.txt",
    "Tribulation-Part4.txt",
    "Tribulation-Part5.txt",
    "Tribulation-Part6.txt",
    "Tribulation-Part7.txt", )


#creates a dictionary (Python's version of a hash table) and
#populates it with characters and their frequencies in the corpus.
#We can get away using nested for loops here (O(n^2)) since this
#corpus is only a few hundred thousand lines. You could do it a
#more efficient way but it is less intuitive.
charDict={}
for name in fileNames:
    f = open(name, 'r')
    st = f.readline()
    while len(st) != 0:
        st = st.strip('\n')
        for i in range(len(st)):
            if (st[i]).isalpha():
                char = (st[i]).lower()
            elif st[i]=="-" and (st[i-1]).isdigit():
                char="v-"
            elif st[i]==":" and (st[i-1]).isdigit():
                char="v:"
            elif st[i]==";" and (st[i-1]).isdigit():
                char="v;"
            else:
                char=st[i]
            if char in charDict:
                charDict[char] += 1
            else:
                charDict[char] = 1
        st = f.readline()
    f.close()


#sorts the keys in order of descending frequency for each category of
#interest: letters, numbers, and punctuation/other. Spaces, tabs, carriage
#returns, etc. are ignored purposefully since they are not relevant to our
#analysis.
letters = []
numbers = []
others = []
keys = charDict.keys()
for key in keys:
    if key.isalpha():
        letters.append(key)
    elif key.isdigit():
        numbers.append(key)
    elif key.isspace():
        continue
    else:
        others.append(key)
            
letterPairs=((key, charDict[key]) for key in letters)
letterPairs=sorted(letterPairs, key = lambda x: x[1], reverse = True)

numberPairs=((key, charDict[key]) for key in numbers)
numberPairs=sorted(numberPairs, key = lambda x: x[1], reverse = True)

otherPairs=((key, charDict[key]) for key in others)
otherPairs=sorted(otherPairs, key = lambda x: x[1], reverse = True)


#prints the frequencies to a csv file for further analysis in Excel
#(or an equivalent spreadsheet program). Some cleaning up is necessary
#to incorporate characters like em dashes and smart quotes in the
#frequencies of more typical characters (hyphens and quotes, etc.).
f=open("LetterFreq.csv",'w', newline='')
csvWriter=writer(f)
for letterPair in letterPairs:
    csvWriter.writerow(letterPair)
csvWriter.writerow([])
for numberPair in numberPairs:
    csvWriter.writerow(numberPair)
csvWriter.writerow([])
for otherPair in otherPairs:
    csvWriter.writerow(otherPair)
f.close()
