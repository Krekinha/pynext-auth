from fastapi import FastAPI
from selenium import (
    webdriver,  # irá lidar com o download da melhor versão para o chrome
)
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService

# from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

app = FastAPI()


@app.get("/api/python")
def hello_world():
    try:
        scrap()
        return {"message": "Scrap success!"}
    except Exception as error:
        return str(error)


def scrap():

    chrome_options = Options()
    chrome_options.add_experimental_option("detach", True)

    # irá identificar a versão do chrome instalada e instalara o ChromeDriver correspondente
    driver = webdriver.Chrome(
        service=ChromeService(ChromeDriverManager().install()),
        options=chrome_options,
    )

    driver.get(
        "https://pages.hashtagtreinamentos.com/inscricao-minicurso-python-automacao-org?origemurl=hashtag_yt_org_minipython_8AMNaVt0z_M"
    )

    el_nome = driver.find_element(
        "xpath",
        '//*[@id="section-10356508"]/section/div[2]/div/div[2]/form/div[1]/div/div[1]/div/input',
    )
    el_email = driver.find_element(
        "xpath",
        '//*[@id="section-10356508"]/section/div[2]/div/div[2]/form/div[1]/div/div[2]/div/input',
    )
    el_zap = driver.find_element(
        "xpath",
        '//*[@id="section-10356508"]/section/div[2]/div/div[2]/form/div[1]/div/div[3]/div/input',
    )
    el_button = driver.find_element(
        "xpath", '//*[@id="section-10356508"]/section/div[2]/div/div[2]/form/button'
    )

    el_nome.send_keys("Krekinha")
    el_email.send_keys("krek@teste.com")
    el_zap.send_keys("33991053110")
    el_button.click()

    driver.quit()
