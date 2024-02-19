from django import template

register = template.Library()

@register.filter(name="cleanURL")
def cleanURL(value):
    clean = value.replace("/","-").replace(" ","-")
    return clean