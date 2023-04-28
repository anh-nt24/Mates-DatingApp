import cv2
import os
import numpy as np
import torch
import torch.nn as nn
from torchvision import models, transforms
from torch.utils.data import Dataset
import itertools
from PIL import Image
import pickle

device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')