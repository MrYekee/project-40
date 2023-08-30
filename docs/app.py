from flask import Flask, render_template, url_for, request, redirect, session
import pyodbc

#driver= '{SQL Server Native Client 11.0}'

def connection():

 #   conn = pyodbc.connect(
 #   "Driver={ODBC Driver 11 for SQL Server};"
 #   "Server=LAPTOP-2E5PH1EF\SQLEXPRESS;"
 #   "Database=Yekee;"
 #   "Trusted_Connection=yes;"
#)


     s = 'LAPTOP-2E5PH1EF\SQLEXPRESS'  # Your server name
     d = 'Yekee'
     u = 'sanele01'  # Your login
     p = 'S@nlam01'  # Your login password
     cstr = 'DRIVER={ODBC Driver 11 for SQL Server};SERVER='+s+';DATABASE='+d+';UID='+u+';PWD='+ p
     conn = pyodbc.connect(cstr)
     return conn

#def __init__(self, conn):
#    self.con = conn

app = Flask(__name__, template_folder='Templates')
app.secret_key = "S@nlam01"

# @app.route("/")
# @app.route("/Index", methods=['GET', 'POST'])
# def hello():
#    return render_template('Index.html')

@app.route("/")
@app.route("/Home", methods=['GET', 'POST'])
def home():
    return render_template('index.html')


# @app.route("/")
@app.route("/Registration", methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        name = request.form['Name']
        surname = request.form['Surname']
        clan = request.form['Clan']
        address = request.form['Address']
        cell = request.form['Cellnumber']
        password = request.form['Password']
        session["user_cell"] = cell
        return render_template('MyProfile.html', n=name, s=surname, c=clan, a=address, cell=cell, p=password)
    else:
        return render_template('Registration.html')



@app.route("/")
@app.route("/MyProfile")
def my_profile():

    if "usersession" in session:
        cell = session["usersession"]

        return render_template('MyProfile.html')
    else:
        return redirect(url_for("register"))




#@app.route("/", methods=['POST'])
#def getvalue():
#   if request.method == "POST":
#       name = request.form['Name']
#       surname = request.form['Surname']
#       clan = request.form['Clan']
#       address = request.form['Address']
#       cell = request.form['Cellnumber']
#       password = request.form['Password']
#       session["user_cell"] = cell
#       return redirect(url_for('my_profile', n=name, s=surname, c=clan, a=address, cell=cell, p=password))
#   else:
 #      return redirect(url_for('register'))


@app.route("/")
@app.route("/", methods=['GET', 'POST'])
def getFridgeMsg():
    name = request.form['fname']
    Cnum = request.form['Cnum']
    Msg = request.form['Fmsg']
    print(name)
    print("Hello Sanele")
 #   if None not in (name, Cnum, Msg):
#        curser = conn.curser()
#        curser.execute("INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Message) VALUES ('{}', '{}', '{}')".format(name, Cnum, Msg))
#        conn.commit()
#        conn.close()
#        curser.close()
    return render_template('About.html', nn=name, cc=Cnum, mm=Msg)
#    else:
#        return render_template('About.html')




@app.route("/")
@app.route("/Stuckups")
def stuckup():
    return render_template('Stuckups.html')

#    -----------------------------------  SCWENGA TRADING FORMS -------------------------------
@app.route("/")
@app.route("/About", methods=['GET', 'POST'])
def about():
    if request.method == "POST":
       fname = request.form['fname']
       Cnum = request.form['Cnum']
       Cloc = request.form['Cloc']
       Msg = request.form['Fmsg']
       MsgO = request.form['MsgOwner']

       conn = connection()
       curser = conn.cursor()
       curser.execute("INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(fname, Cnum, Cloc, Msg, MsgO))
       conn.commit()
       conn.close()
#       curser.close()

#       return render_template('About.html')
       return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc,mm=Msg, mo=MsgO)
    else:
        return render_template('About.html')

#     ------------------------------------- end of SCWENGA TRADING FORMS ------------------------


###################### the following is the OVER-THE-COUNTER for Scwenga Trading #################

@app.route("/")
@app.route("/do582004829ier91883_st_scwenga_store1")
def storeOne():
    customers = []
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Messages where Msg_Owner = 1")
    for row in cursor.fetchall():
        customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],"Msg_Message": row[3]})
    conn.close()
#    return render_template("carslist.html", cars=cars)

    return render_template('do582004829ier91883_st_scwenga_store1.html', customers=customers)



@app.route("/")
@app.route("/deleteStoreOne")
def deleteStoreOne():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 1")
    conn.commit()
    conn.close()
    return render_template('do582004829ier91883_st_scwenga_store1.html')
####################################### end of SCWENGA ######################################################

####################################### beginning of AHLANGENE PROJECTS (PTY) LTD ###########################

@app.route("/")
@app.route("/Ahlangene", methods=['GET', 'POST'])
def storeFive():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()
        #       curser.close()

        #       return render_template('About.html')
        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Ahlangene.html')





@app.route("/")
@app.route("/do582004829ier92883_ap_ahlangene_store2")
def refreshFive():
    customers = []
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Messages where Msg_Owner = 2")
    for row in cursor.fetchall():
        customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],"Msg_Message": row[3]})
    conn.close()
    return render_template('do582004829ier92883_ap_ahlangene_store2.html', customers=customers)




@app.route("/")
@app.route("/deleteStoreFive")
def deleteStoreFive():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 2")
    conn.commit()
    conn.close()
    return render_template('do582004829ier92883_ap_ahlangene_store2.html')

######################################            END OF AHLANGENE PROJECTS    #############################


#                            NANGU BRICK YARD (PTY) LTD            #
@app.route("/")
@app.route("/Nangu", methods=['GET', 'POST'])
def nanny():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()
        #       curser.close()

        #       return render_template('About.html')
        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Nangu.html')




@app.route("/")
@app.route("/do582004829ier93883_nby_nangu_store3")
def refreshNine():
    customers = []
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Messages where Msg_Owner = 3")
    for row in cursor.fetchall():
        customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],"Msg_Message": row[3]})
    conn.close()
    return render_template('do582004829ier93883_nby_nangu_store3.html', customers=customers)



@app.route("/")
@app.route("/deleteStoreNine")
def deleteStoreNine():
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 3")
    conn.commit()
    conn.close()
    return render_template('do582004829ier93883_nby_nangu_store3.html')

#                            NANGU BRICK YARD (PTY) LTD            #



@app.route("/")
@app.route("/Mechanic")
def mechanic():
    return render_template('Mechanic.html')


@app.route("/")
@app.route("/Mobitown")
def mobitown():
    return render_template('Mobitown.html')


@app.route("/")
@app.route("/Hero")
def hero():
    return render_template('Hero.html')

# ---------- Sassy ----------- Sassy ------------ Sassy -----------------#
@app.route("/")
@app.route("/Sassy", methods=['GET', 'POST'])
def cosmetics():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()
        #       curser.close()

        #       return render_template('About.html')
        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Sassy.html')



@app.route("/")
@app.route("/do582004829ier94883_sbs_sassy_store4")
def refereeTen():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 4")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier94883_sbs_sassy_store4.html', customers=customers)

@app.route("/")
@app.route("/deleteStoreTen")
def deleteStoreTen():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 4")
        conn.commit()
        conn.close()
        return render_template('do582004829ier94883_sbs_sassy_store4.html')

# end of Sassy ------------- end of Sassy ----------- end of Sassy ------------#



# ------------------------------          UNSTAR WEAR    ------------------------------------------------

@app.route("/")
@app.route("/Unstar", methods=['GET', 'POST'])
def fashionOne():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()

        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Unstar.html')



@app.route("/")
@app.route("/do582004829ier95883_uw_unstar_store5")
def fashionTwo():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 5")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier95883_uw_unstar_store5.html', customers=customers)



@app.route("/")
@app.route("/deleteFashionThree")
def deleteFashionThree():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 5")
        conn.commit()
        conn.close()
        return render_template('do582004829ier95883_uw_unstar_store5.html')

# -------------- END ----------- OF ----------- UNSTAR WEAR ------- END ----------- END ------------------





# --------------------------------            VOVO LIVESTOCK ---------------------------------------------

@app.route("/")
@app.route("/Vovo", methods=['GET', 'POST'])
def liveStock():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()

        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Vovo.html')




@app.route("/")
@app.route("/do582004829ier96883_vls_vovo_store6")
def StockLive():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 6")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier96883_vls_vovo_store6.html', customers=customers)




@app.route("/")
@app.route("/deleteLiveStock")
def deleteLiveStock():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 6")
        conn.commit()
        conn.close()
        return render_template('do582004829ier96883_vls_vovo_store6.html')

# ----------- END -------------- VOVO LIVESTOCK ------------------- END ----------------------------------



######################         Soda Wear    #############################

@app.route("/")
@app.route("/SodaWear", methods=['GET', 'POST'])
def getClothes():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()

        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Soda.html')




@app.route("/")
@app.route("/do582004829ier97883_sw_soda_store7")
def getClothesTwo():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 7")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier97883_sw_soda_store7.html', customers=customers)



@app.route("/")
@app.route("/deleteClothes")
def deleteClothes():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 7")
        conn.commit()
        conn.close()
        return render_template('do582004829ier97883_sw_soda_store7.html')

############################### end of SodaWear           ##################################


# ---------         KUHLE ------------  KUHLE ----------  KUHLE -------- KUHLE -------------

@app.route("/")
@app.route("/Kuhlez", methods=['GET', 'POST'])
def makeUp():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()

        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Kuhle.html')



@app.route("/")
@app.route("/do582004829ier98883_kmn_kuhle_store8")
def getMakeUp():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 8")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier98883_kmn_kuhle_store8.html', customers=customers)


@app.route("/")
@app.route("/deleteMakeUp")
def deleteMakeUp():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 8")
        conn.commit()
        conn.close()
        return render_template('do582004829ier98883_kmn_kuhle_store8.html')

# -------------- END OF KUHLE -----------  END KUHLE ----------  END ----------- END --------





#    ------------------------------------ WANTU EVENTS & CATERING ----------------------------

@app.route("/")
@app.route("/Wantu", methods=['GET', 'POST'])
def eventsCatering():
    if request.method == "POST":
        fname = request.form['fname']
        Cnum = request.form['Cnum']
        Cloc = request.form['Cloc']
        Msg = request.form['Fmsg']
        MsgO = request.form['MsgOwner']

        conn = connection()
        curser = conn.cursor()
        curser.execute(
            "INSERT INTO Messages (Msg_Name, Msg_Cell, Msg_Location, Msg_Message, Msg_Owner) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
                fname, Cnum, Cloc, Msg, MsgO))
        conn.commit()
        conn.close()

        return render_template('Home.html', nn=fname, cc=Cnum, cl=Cloc, mm=Msg, mo=MsgO)
    else:
        return render_template('Wantu.html')



@app.route("/")
@app.route("/do582004829ier99883_wec_wantu_store9")
def getEvents():
        customers = []
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Messages where Msg_Owner = 9")
        for row in cursor.fetchall():
            customers.append({"Msg_Num": row[0], "Msg_Name": row[1], "Msg_Cell": row[2], "Msg_Location": row[6],
                              "Msg_Message": row[3]})
        conn.close()
        return render_template('do582004829ier99883_wec_wantu_store9.html', customers=customers)


@app.route("/")
@app.route("/deleteEvents")
def deleteEvents():
        conn = connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Messages WHERE Msg_Owner = 9")
        conn.commit()
        conn.close()
        return render_template('do582004829ier99883_wec_wantu_store9.html')

#    --------- END ------------ END ---------- WANTU EVENTS & CATERING ------------- END --------



@app.route("/")
@app.route("/aboutus")
def aboutus():
    return render_template('AboutUs.html')






@app.route("/")
@app.route("/Herbalife")
def my_herbalife():
    return render_template('Herbalife.html')


#ChatWithScwenga
#@app.route("/")
@app.route("/ChatWithScwenga", methods=['GET', 'POST'])
def chat_Scwenga():
    return render_template('ChatWithScwenga.html')

@app.route("/MyProfile", methods=['POST'])
def getChat():

    chat = request.form['custChat']
    return render_template('MyProfile.html', cC=chat)
#end of ChatWithScwenga






if __name__ == '__main__':
    app.run(debug=True)
